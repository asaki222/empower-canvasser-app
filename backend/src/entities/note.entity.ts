import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  note: string;

  @Column()
  email:string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}