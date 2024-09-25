"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function SignInPage() {
	return (
		<section className="grid w-full grow items-center px-4 sm:justify-center">
			<SignIn.Root>
				<Clerk.Loading>
					{(isGlobalLoading) => (
						<>
							<SignIn.Step name="start">
								<Card className="w-full sm:w-96">
									<CardHeader>
										<CardTitle className="mx-auto">
											<Logo />
										</CardTitle>
										<CardDescription className="mx-auto">
											Welcome back! Please sign in to
											continue
										</CardDescription>
									</CardHeader>
									<CardContent className="grid gap-y-4">
										<section className="grid grid-cols-2 gap-x-4">
											<Clerk.Connection
												name="google"
												asChild
											>
												<Button
													size="sm"
													variant="outline"
													type="button"
													disabled={isGlobalLoading}
												>
													<Clerk.Loading scope="provider:google">
														{(isLoading) =>
															isLoading ? (
																<Loader2 className="animate-spin" />
															) : (
																<>
																	<Clerk.Icon className="mr-2 size-4" />
																	<span className="-ml-2">
																		oogle
																	</span>
																</>
															)
														}
													</Clerk.Loading>
												</Button>
											</Clerk.Connection>
											<Clerk.Connection
												name="facebook"
												asChild
											>
												<Button
													size="sm"
													variant="outline"
													type="button"
													disabled={isGlobalLoading}
												>
													<Clerk.Loading scope="provider:facebook">
														{(isLoading) =>
															isLoading ? (
																<Loader2 className="animate-spin" />
															) : (
																<>
																	<Clerk.Icon className="mr-2 size-4" />
																	<span className="-ml-2">
																		acebook
																	</span>
																</>
															)
														}
													</Clerk.Loading>
												</Button>
											</Clerk.Connection>
										</section>
										<p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
											or
										</p>
										<Clerk.Field
											name="identifier"
											className="space-y-2"
										>
											<Clerk.Label asChild>
												<Label>Email address</Label>
											</Clerk.Label>
											<Clerk.Input
												type="email"
												required
												asChild
											>
												<Input />
											</Clerk.Input>
											<Clerk.FieldError className="block text-sm text-red-400" />
										</Clerk.Field>
									</CardContent>
									<CardFooter>
										<section className="grid w-full gap-y-4">
											<SignIn.Action submit asChild>
												<Button
													disabled={isGlobalLoading}
												>
													<Clerk.Loading>
														{(isLoading) => {
															return isLoading ? (
																<Loader2 className="animate-spin" />
															) : (
																"Continue"
															);
														}}
													</Clerk.Loading>
												</Button>
											</SignIn.Action>

											<Button
												variant="link"
												size="sm"
												asChild
											>
												<Link href="/sign-up">
													Don&apos;t have an account?
													Sign up
												</Link>
											</Button>
										</section>
									</CardFooter>
								</Card>
							</SignIn.Step>

							<SignIn.Step name="choose-strategy">
								<Card className="w-full sm:w-96">
									<CardHeader>
										<CardTitle className="mx-auto">
											Use another method
										</CardTitle>
										<CardDescription className="mx-auto">
											Facing issues? You can use any of
											these methods to sign in.
										</CardDescription>
									</CardHeader>
									<CardContent className="grid gap-y-4">
										<SignIn.SupportedStrategy
											name="email_code"
											asChild
										>
											<Button
												type="button"
												variant="link"
												disabled={isGlobalLoading}
											>
												Email code
											</Button>
										</SignIn.SupportedStrategy>
										<SignIn.SupportedStrategy
											name="password"
											asChild
										>
											<Button
												type="button"
												variant="link"
												disabled={isGlobalLoading}
											>
												Password
											</Button>
										</SignIn.SupportedStrategy>
									</CardContent>
									<CardFooter>
										<section className="grid w-full gap-y-4">
											<SignIn.Action
												navigate="previous"
												asChild
											>
												<Button
													disabled={isGlobalLoading}
												>
													<Clerk.Loading>
														{(isLoading) => {
															return isLoading ? (
																<Loader2 className="animate-spin" />
															) : (
																"Go back"
															);
														}}
													</Clerk.Loading>
												</Button>
											</SignIn.Action>
										</section>
									</CardFooter>
								</Card>
							</SignIn.Step>

							<SignIn.Step name="verifications">
								<SignIn.Strategy name="password">
									<Card className="w-full sm:w-96">
										<CardHeader>
											<CardTitle className="mx-auto">
												Check your email
											</CardTitle>
											<CardDescription className="mx-auto">
												Enter the verification code sent
												to your email
											</CardDescription>
											<p className="mx-auto text-sm text-muted-foreground">
												Welcome back{" "}
												<SignIn.SafeIdentifier />
											</p>
										</CardHeader>
										<CardContent className="grid gap-y-4">
											<Clerk.Field
												name="password"
												className="space-y-2"
											>
												<Clerk.Label asChild>
													<Label>Password</Label>
												</Clerk.Label>
												<Clerk.Input
													type="password"
													asChild
												>
													<Input />
												</Clerk.Input>
												<Clerk.FieldError className="block text-sm text-red-400" />
											</Clerk.Field>
										</CardContent>
										<CardFooter>
											<section className="grid w-full gap-y-4">
												<SignIn.Action submit asChild>
													<Button
														disabled={
															isGlobalLoading
														}
													>
														<Clerk.Loading>
															{(isLoading) => {
																return isLoading ? (
																	<Loader2 className="animate-spin" />
																) : (
																	"Continue"
																);
															}}
														</Clerk.Loading>
													</Button>
												</SignIn.Action>
												<SignIn.Action
													navigate="choose-strategy"
													asChild
												>
													<Button
														type="button"
														size="sm"
														variant="link"
													>
														Use another method
													</Button>
												</SignIn.Action>
											</section>
										</CardFooter>
									</Card>
								</SignIn.Strategy>

								<SignIn.Strategy name="email_code">
									<Card className="w-full sm:w-96">
										<CardHeader>
											<CardTitle className="mx-auto">
												Check your email
											</CardTitle>
											<CardDescription className="mx-auto">
												Enter the verification code sent
												to your email
											</CardDescription>
											<p className="mx-auto text-sm text-muted-foreground">
												Welcome back{" "}
												<SignIn.SafeIdentifier />
											</p>
										</CardHeader>
										<CardContent className="grid gap-y-4">
											<Clerk.Field name="code">
												<Clerk.Label className="sr-only">
													Email verification code
												</Clerk.Label>
												<section className="grid gap-y-2 items-center justify-center">
													<section className="flex justify-center text-center">
														<Clerk.Input
															type="otp"
															autoSubmit
															className="flex justify-center has-[:disabled]:opacity-50"
															render={({
																value,
																status,
															}) => {
																return (
																	<section
																		data-status={
																			status
																		}
																		className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring"
																	>
																		{value}
																	</section>
																);
															}}
														/>
													</section>
													<Clerk.FieldError className="block text-sm text-red-400 text-center" />
													<SignIn.Action
														asChild
														resend
														className="text-muted-foreground"
														fallback={({
															resendableAfter,
														}) => (
															<Button
																variant="link"
																size="sm"
																disabled
															>
																Didn&apos;t
																receive a code?
																Resend (
																<span className="tabular-nums">
																	{
																		resendableAfter
																	}
																</span>
																)
															</Button>
														)}
													>
														<Button
															variant="link"
															size="sm"
														>
															Didn&apos;t receive
															a code? Resend
														</Button>
													</SignIn.Action>
												</section>
											</Clerk.Field>
										</CardContent>
										<CardFooter>
											<section className="grid w-full gap-y-4">
												<SignIn.Action submit asChild>
													<Button
														disabled={
															isGlobalLoading
														}
													>
														<Clerk.Loading>
															{(isLoading) => {
																return isLoading ? (
																	<Loader2 className="animate-spin" />
																) : (
																	"Continue"
																);
															}}
														</Clerk.Loading>
													</Button>
												</SignIn.Action>
												<SignIn.Action
													navigate="choose-strategy"
													asChild
												>
													<Button
														size="sm"
														variant="link"
													>
														Use another method
													</Button>
												</SignIn.Action>
											</section>
										</CardFooter>
									</Card>
								</SignIn.Strategy>
							</SignIn.Step>
						</>
					)}
				</Clerk.Loading>
			</SignIn.Root>
		</section>
	);
}
