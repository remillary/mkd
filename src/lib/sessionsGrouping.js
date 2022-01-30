const tariffs = [{
    name: 'Взрослый 14+',
    oneWaySessionIds: [39, 40, 34],
    roundTripSessionIds: [12, 14, 2]
}, {
    name: 'Детский 7+',
    oneWaySessionIds: [199, 201, 197],
    roundTripSessionIds: [200, 202, 198]
}];

export const groupSessions = (sessions) => {
    const groupedSessions = [];

    tariffs.forEach((tariff) => {
        const oneWaySession = sessions.find(s => tariff.oneWaySessionIds.includes(s.id));
        const roundTripSession = sessions.find(s => tariff.roundTripSessionIds.includes(s.id));

        if (oneWaySession && roundTripSession) {
            groupedSessions.push({
                name: tariff.name,
                oneWaySession,
                roundTripSession
            })
        }
    })

    return groupedSessions;
}
