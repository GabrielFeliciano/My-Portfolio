import { RepoDto } from "@/dto/Repo.dto";
import { NextApiRequest, NextApiResponse } from "next";
import repos_urls from "@/config/repos";
import Axios from "axios";
import { validate } from "class-validator";
import { classToPlain, instanceToPlain, plainToInstance } from "class-transformer";
import { RepoListDto } from "@/dto/RepoList.dto";

const mapper = async (url: string): Promise<RepoDto|null> => {
    try {
        const { data, status } = await Axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${process.env.GITHUB_TOKEN}`
            }
        });

        const errors = await validate(data as RepoDto);
        if (errors.length == 0) {
            return data;
        }
        
        return null;
    } catch (error) {
        return null;
    }
}

export default async function handler (req:NextApiRequest, res:NextApiResponse) {
    const response_repo = await Promise.all(
        repos_urls.map(url => mapper(url))
    );
    res.json(response_repo.filter(r => r !== null) as RepoDto[]);
}