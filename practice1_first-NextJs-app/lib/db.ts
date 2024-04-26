import { PrismaClient } from "@prisma/client";

// Augment the global namespace to define the type of globalThis
declare global {
    var prismaClient: PrismaClient | undefined;
}

function createPrismaClientInstance(): PrismaClient {
    if (!globalThis.prismaClient) {
        globalThis.prismaClient = new PrismaClient();
    }
    return globalThis.prismaClient;
}

export const db = createPrismaClientInstance();