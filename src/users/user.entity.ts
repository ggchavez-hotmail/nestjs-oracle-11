import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('PERSONS')
export class Cliente {
  @PrimaryColumn({name: 'PERSON_ID', type: 'number'})
  id: number;

  @Column({name: 'FIRST_NAME', type: 'varchar2', length: 50})
  firstName: string;

  @Column({name: 'LAST_NAME', type: 'varchar2', length: 50})
  lastName: string;
}
