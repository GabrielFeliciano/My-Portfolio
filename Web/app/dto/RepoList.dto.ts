import { Expose, Type } from "class-transformer";
import { IsArray } from "class-validator";
import { RepoDto } from "./Repo.dto";

export class RepoListDto {
    @Expose()
    @IsArray()
    @Type(() => RepoDto)
    repos!: RepoDto[];
}