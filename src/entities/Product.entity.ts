import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { User } from './User.entity'

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column('decimal', { precision: 10, scale: 2 })
    price: number

    @Column()
    quantity: number

    // @Column()
    // status: string

    @Column()
    image: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at?: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at?: Date;
    
    @ManyToOne(() => User, (user) => user.products)
    seller: User;
}