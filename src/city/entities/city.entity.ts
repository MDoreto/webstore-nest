import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { StateEntity } from "../../state/entities/state.entity";

@Entity({ name: 'city' })
export class CityEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @ManyToOne(() => StateEntity, state => state.cities)
    @JoinColumn({ name: 'state_id' })
    state: StateEntity;

    @Column({ name: "name", nullable: false })
    name: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @CreateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}