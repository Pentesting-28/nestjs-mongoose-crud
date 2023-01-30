import { 
    IsString,
    IsEmail,
    MinLength,
    MaxLength,
    IsNotEmpty
} from 'class-validator';
// import { PartialType } from '@nestjs/swagger';
// import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto /*extends PartialType(CreateUserDto)*/ {
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
}
