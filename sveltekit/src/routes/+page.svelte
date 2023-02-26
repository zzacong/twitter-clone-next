<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="min-h-screen flex flex-col items-center justify-center">
	<h1 class="text-6xl font-bold">SvelteKit Auth Example</h1>

	<div class="my-6">
		<pre class="text-xs">{JSON.stringify($page.data.session, null, 2)}</pre>
	</div>

	<p class="text-center space-y-2">
		{#if $page.data.session}
			{#if $page.data.session.user?.image}
				<img src={$page.data.session.user.image} alt="Profile" class="rounded-full" />
			{/if}
			<span class="block">
				<small>Signed in as</small><br />
				<strong>{$page.data.session.user?.name ?? 'User'}</strong>
			</span>
			<button
				on:click={() => signOut()}
				class="bg-twitter rounded-lg px-4 py-2 text-white font-bold">Sign out</button
			>
		{:else}
			<span class="block">You are not signed in</span>
			<button on:click={() => signIn()} class="bg-twitter rounded-lg px-4 py-2 text-white font-bold"
				>Sign in</button
			>
		{/if}
	</p>
</section>
