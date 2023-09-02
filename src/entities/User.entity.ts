import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from "typeorm"
import { Product } from "./Product.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone: string

    @Column()
    address: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @OneToMany(() => Product, (product) => product.seller)
    products: Product[];
}