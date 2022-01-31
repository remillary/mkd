import {TariffType} from './tariffType';

export const TariffsConfig = [{
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
}, {
    name: 'Премиум',
    type: TariffType.PREMIUM,
    sessionIds: [34]
}];