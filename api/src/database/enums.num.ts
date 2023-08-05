import { registerEnumType } from '@nestjs/graphql';

export enum StatusEntity {
  ACTIVE = 'Activo',
  INACTIVE = 'Inactivo',
}

export enum StatusOrder {
  APPROVED = 'approved',
  CANCEL = 'cancel',
  DELIVERY = 'delivery',
  TRAVEL = 'travel',
}

registerEnumType(StatusOrder, {
  name: 'StatusOrder',
  description: 'Posibles estados de las ordenes',
});

registerEnumType(StatusEntity, {
  name: 'StatusEntity',
  description: 'Posibles estados de las entidades',
});
