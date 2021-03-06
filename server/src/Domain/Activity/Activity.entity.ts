import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../User/User.entity';
import {Task} from '../Task/Task.entity';
import {Project} from '../Project/Project.entity';

@Entity()
export class Activity {
  // Times spent are stored in base 100
  public static readonly MAXIMUM_TIMESPENT_PER_DAY: number = 100;

  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({type: 'integer', nullable: false})
  private time: number;

  @Column({type: 'date', nullable: false})
  private date: string;

  @Column({type: 'varchar', nullable: true})
  private summary: string;

  @ManyToOne(type => Project, {nullable: false})
  private project: Project;

  @ManyToOne(type => Task, {nullable: false})
  private task: Task;

  @ManyToOne(type => User, {nullable: false})
  private user: User;

  constructor(
    project: Project,
    task: Task,
    user: User,
    time: number,
    date: string,
    summary?: string
  ) {
    this.project = project;
    this.task = task;
    this.user = user;
    this.time = time;
    this.date = date;
    this.summary = summary;
  }

  public getId(): string {
    return this.id;
  }

  public getTime(): number {
    return this.time;
  }

  public getDate(): string {
    return this.date;
  }

  public getSummary(): string | null {
    return this.summary;
  }

  public getProject(): Project {
    return this.project;
  }

  public getTask(): Task {
    return this.task;
  }

  public getUser(): User {
    return this.user;
  }
}
