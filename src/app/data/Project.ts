import { BaseEntity } from './BaseEntity';
import { Skill } from './Skill';

export interface Project extends BaseEntity {
    title: string,
    description: string,
    image: string,
    displayOrder: number,
    published: boolean,
    skills? : Skill[],
    githubUrl? :string,
    demoUrl?: string,
}