import React ,{ReactNode} from 'react';
import { AuthProvide } from 'context/auth_context';

export const AppProviders=({children}:{children:ReactNode})=>{
    return <AuthProvide>
            {children}
       </AuthProvide>
}