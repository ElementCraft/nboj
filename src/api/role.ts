import { Api, Get, Params, useContext } from "@midwayjs/hooks";
import { Context } from "@midwayjs/koa";
import { useEntityModel } from "@midwayjs/orm";
import { Role } from "../entity/role";

export const getAllRole = Api(
    Get('/role/list'),
    async () => {
        const ctx = useContext<Context>();
        const roleModel = useEntityModel(Role);
        const roles = roleModel.find({});
        return roles;
    }
);