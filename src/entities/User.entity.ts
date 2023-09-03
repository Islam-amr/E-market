import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Product } from "./Product.entity"
import { Exclude } from 'class-transformer'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column({ select: false })
    password: string

    @Column()
    phone: string

    @Column()
    address: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @OneToMany(() => Product, (product) => product.seller)
    products: Product[];
}