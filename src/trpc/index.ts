import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
	authCallback: publicProcedure.query(async () => {
		const { getUser } = getKindeServerSession();
		const user = await getUser();

		if (!user.id || !user.email)
			throw new TRPCError({ code: "UNAUTHORIZED" });

		// check if the user is in the db
		const dbUser = await db.user.findFirst({
			where: {
				Id: user.id,
			},
		});

		if (!dbUser) {
			// create user in db
			await db.user.create({
				data: {
					Id: user.id,
					email: user.email,
				},
			});
		}

		return { success: true };
	}),
	getUserFiles: privateProcedure.query(async ({ ctx }) => {
		const { userId } = ctx;

		return await db.file.findMany({
			where: {
				userId,
			},
		});
	}),
});

export type AppRouter = typeof appRouter;
