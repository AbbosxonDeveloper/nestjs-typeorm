import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString,IsNumber, IsNotEmpty, Length } from "class-validator";

export class CreateDto{
    @ApiProperty({name: "name", type: 'string', required: true, example: "Toshmat"})
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    @IsString()
    @Length(1,30)
    readonly name: string;

    @ApiProperty({name: "password", type: 'string', required: true, example: "e12345678"})
    @Length(8,30)
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    readonly password: string;
}