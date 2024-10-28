import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'usuarios'})
export class User {
    @PrimaryGeneratedColumn() // genera el id automatico
    id : number
    @Column({unique: true}) // un solo username
    username : string
    @Column({nullable : true}) // no es requerido, solo para practicar como funciona jajaja
    password : string
}   