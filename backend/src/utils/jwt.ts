import jwt from 'jsonwebtoken';
import { config } from '../config/env';

interface TokenPayload {
    id: string;
    email: string;
    role: string;
}

export const generateAccessToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn as any,
    });
};

export const generateRefreshToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, config.jwt.refreshSecret, {
        expiresIn: config.jwt.refreshExpiresIn as any,
    });
};

export const verifyRefreshToken = (token: string): TokenPayload => {
    return jwt.verify(token, config.jwt.refreshSecret) as TokenPayload;
};
