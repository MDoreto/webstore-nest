import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn,OneToMany } from "typeorm";
import { CityEntity } from "../../city/entities/city.entity";
@Entity({ name: 'state' })
export class StateEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: "name", nullable: false })
    name: string;

    @Column({ name: "uf", nullable: false })
    uf: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @CreateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany(() => CityEntity, city => city.state)
    cities: CityEntity[];
}