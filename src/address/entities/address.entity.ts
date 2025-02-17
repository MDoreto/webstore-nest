import { create } from "domain";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'address' })
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: "user_id", nullable: false })
    userId: number;

    @Column({ name: "complement", nullable: true })
    complement: string;

    @Column({ name: "number", nullable: false })
    numberAddress: number;

    @Column({ name: "cep", nullable: false })
    cep: string;

    @Column({ name: "city_id", nullable: false })
    cityId: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @CreateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}