import {TariffType} from './tariffType';

export class SessionsGroupHelper {

    config = []

    constructor() {
        fetch(`${process.env.REACT_APP_API_URL}/purchase/sessions-config.json`)
            .then((data) => this.config = data.json());
    }

    group(sessions) {
        const groupedSessions = [];

        this.config.forEach((tariff) => {

            if (tariff.type === TariffType.PREMIUM) {
                const session = sessions.find(s => tariff.sessionIds.includes(s.id));
                if (session) {
                    groupedSessions.push({
                        name: tariff.name,
                        type: tariff.type,
                        session
                    });
                }
            } else {
                const oneWaySession = sessions.find(s => tariff.oneWaySessionIds.includes(s.id));
                const roundTripSession = sessions.find(s => tariff.roundTripSessionIds.includes(s.id));

                if (oneWaySession && roundTripSession) {
                    groupedSessions.push({
                        oneWaySession,
                        roundTripSession,
                        name: tariff.name,
                        type: tariff.type
                    })
                }
            }
        })

        return groupedSessions;

    }
}
