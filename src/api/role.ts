import { Api, Get, Params, useContext } from "@midwayjs/hooks";
import { Context } from "@midwayjs/koa";

export const getBookByParams = Api(
    Get('/role/list'),
    Params<{ id: string }>(),
    async () => {
        const ctx = useContext<Context>();
        const { id } = ctx.params;
        return {};
    }
);