import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { UserRepository } from './user.entity';


@Entity({
    name: "books",
})
export class BookRepository{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: '58'
    })
    title: string;

    @Column({
        type: "varchar",
        length: '30'
    })
    price: string;

    @ManyToOne(() => UserRepository, users => users.books, {
        cascade: true,
        onDelete: "CASCADE"
    })
    owner: UserRepository
}