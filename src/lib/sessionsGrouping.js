import {TariffType} from './tariffType';

const tariffs = [{
    name: 'Взрослый 14+',
    type: TariffType.ADULT,
    oneWaySessionIds: [39, 40, 34],
    roundTripSessionIds: [12, 14, 2]
}, {
    name: 'Детский 7+',
    type: TariffType.CHILDREN,
    oneWaySessionIds: [199, 201, 197],
    roundTripSessionIds: [200, 202, 198]
}, {
    name: 'Льготный',
    type: TariffType.PREFERENTIAL,
    oneWaySessionIds: [],
    roundTripSessionIds: [],
}, {
    name: 'Бесплатно',
    type: TariffType.FREE,
    oneWaySessionIds: [],
    roundTripSessionIds: [],
}];

export const groupSessions = (sessions) => {
    const groupedSessions = [];

    tariffs.forEach((tariff) => {
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
    })

    return groupedSessions;
}
