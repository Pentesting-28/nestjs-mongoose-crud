import { 
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    IsNotEmpty
} from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(255)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(255)
    last_name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(8)
    @MaxLength(12)
    @IsNotEmpty()
    password: string;
}
