import { 
    IsString,
    MinLength,
    MaxLength,
    IsNotEmpty
} from 'class-validator';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(255)
    name: string
    
    @IsString()
    @IsNotEmpty()
    price: string

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(599)
    description: string
}
