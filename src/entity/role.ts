import { EntityModel } from "@midwayjs/orm";
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@EntityModel("role")
export class Role {
    @PrimaryColumn({length:20})
    code: string;

    @Column({length:50})
    name: string;

    @Column({length:20})
    description: string;

    @Column()
    enable: boolean;

    @CreateDateColumn({
        name: "create_time",
        type: 'timestamp'
    })
    createTime: Date;

    @UpdateDateColumn({
        name: "update_time",
        type: 'timestamp'
    })
    updateTime: Date; 

    @DeleteDateColumn({
        name: "delete_time",
        type: 'timestamp'
    })
    deleteTime: Date;

    @VersionColumn()
    version: number;
}