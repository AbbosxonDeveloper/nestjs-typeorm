import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString,IsNumber, IsNotEmpty, Length } from "class-validator";

export class CreateBookDto{
    @ApiProperty({name: "title", type: 'string', required: true, example: "Dunyoning Ishlari"})
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    @IsString()
    @Length(1,58)
    @IsNotEmpty()
    @Transform(({value}) => value.trim())
    readonly title: string;

    @ApiProperty({name: "price", type: 'string', required: true, example: "50$"})
    @Length(1,30)
    @IsString()
    @IsNotEmpty()
    @Transform(({value}) => value?.trim())
    readonly price: string;
}