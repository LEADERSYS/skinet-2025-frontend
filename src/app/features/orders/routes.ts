import { Route } from "@angular/router";
import { authGuard } from "../../core/guards/auth-guard";
import { Order } from "./order";
import { OrderDetailed } from "./order-detailed/order-detailed";

export const orderRoutes: Route[] = [
    {path: '', component: Order, canActivate: [authGuard]},
    {path: ':id', component: OrderDetailed, canActivate: [authGuard]},
]