import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { BookRepository } from './book.entity';


@Entity({
    name: "users",
})
export class UserRepository{
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column({
        type: 'varchar',
        length: '30'
    })
    name: string;

    @Column({
        type: "varchar",
        length: '45'
    })
    password: string;

    @OneToMany(()=> BookRepository, books=> books.owner)
    books: BookRepository[]
}