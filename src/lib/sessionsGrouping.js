import {TariffsConfig} from './tariffsConfig';
import {TariffType} from './tariffType';

export const groupSessions = (sessions) => {
    const groupedSessions = [];

    TariffsConfig.forEach((tariff) => {

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
