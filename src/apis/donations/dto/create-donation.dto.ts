import { SuperApiProperty } from '@libs/super-core/decorators/super-api-property.decorator';
import {
    IsNotEmpty,
    IsString,
    IsEnum,
    IsNumber,
    IsOptional,
} from 'class-validator';
import { CreateItemDto } from '../../donation-items/dto/create-item.dto';

export class CreateDonationDto {
    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    title: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    message: string;

    @SuperApiProperty({
        type: String,
        required: false,
        enum: ['FUND', 'CASE'],
    })
    @IsNotEmpty()
    @IsEnum(['FUND', 'CASE'])
    type: string;

    @SuperApiProperty({
        type: Number,
        required: true,
    })
    @IsNumber()
    amount: number;

    @SuperApiProperty({
        type: [CreateItemDto],
        required: false,
    })
    items: CreateItemDto[];

    @SuperApiProperty({
        type: String,
        required: true,
    })
    @IsString()
    donorName: string;

    @SuperApiProperty({
        type: String,
        required: false,
    })
    @IsOptional()
    @IsString()
    paymentMethod: string;

    @SuperApiProperty({
        type: String,
        required: true,
    })
    @IsString()
    currency: string;

    @SuperApiProperty({
        type: Number,
        required: false,
    })
    @IsOptional()
    @IsString()
    cardLast4digits: number;
}
