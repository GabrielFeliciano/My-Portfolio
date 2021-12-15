import { Exclude, Expose } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty, Length, IsDate } from 'class-validator';

export class RepoDto {
    @IsNumber()
    @IsNotEmpty()
    id!: number;

    @Expose()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    description!: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsDate()
    created_at!: string

    @Expose()
    @IsString()
    @IsNotEmpty()
    @IsDate()
    updated_at!: string

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    stargazers_count!: number;

    @Expose()
    @IsString()
    @IsNotEmpty()
    html_url!: string;
}