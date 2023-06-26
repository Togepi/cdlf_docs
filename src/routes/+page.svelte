<script lang="ts">
	import type { AppendTarget } from 'svelte/types/compiler/interfaces';

	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	let cuisineOn: Boolean;
	let lingerieOn: Boolean;
	onMount(() => {
		window.scrollTo(0, 0);
		let winSize = window.innerWidth;

		if (winSize > 960) {
			cuisineOn = true;
			lingerieOn = true;
		} else {
			cuisineOn = false;
			lingerieOn = false;
		}
	});

	export let data: PageData;
	let showLingerie = () => {
		lingerieOn = !lingerieOn;
	};
	let showCuisine = () => {
		cuisineOn = !cuisineOn;
	};
	let arrCuisine = data.arrCuisine as Array<any>;
	let arrLingerie = data.arrLingerie as Array<any>;
	console.log(data);
</script>

<div class="bg-gray-100 min-h-screen px-4 pb-12">
	<div class="max-w-2xl m-auto">
		<div class="px-5">
			<h1 class="text-3xl pt-10 uppercase font-bold">CDLF_docs</h1>
			<p class="text-xs">Documentation Colonie de la Fouly</p>
		</div>
		<div class="px-5 flex mt-12 gap-x-4">
			<p class="px-2 border-l-4 border-red-500 text-xs font-semibold">Les indispensables</p>
			<p class="px-2 border-l-4 border-green-500 text-xs font-semibold">Les modes d'emploi</p>
		</div>
		<div class="mt-6">
			<button
				on:click={() => showLingerie()}
				class="relative w-full py-4 border-b-2 border-gray-200/75 group hover:bg-gray-200/75 hover:rounded-xl px-5"
			>
				<div class="relative flex justify-between">
					<span class="pr-3 font-semibold leading-6 text-gray-900">Documents Lingerie</span>
					<span class="pr-3 text-3xl font-semibold leading-6 text-gray-900"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</span>
				</div>
			</button>
			{#if lingerieOn}
				<ul class="grid grid-cols-1 gap-y-2 mt-5">
					{#each arrLingerie as { Name, created_at, doc_name, doc_url, Types, year, Importance }}
						<li
							class="flex items-center justify-between px-5 py-5 bg-white shadow rounded {Importance ===
							'Indispensable'
								? 'border-l-4 border-red-500'
								: ''} {Importance === 'Mode' ? 'border-l-4 border-green-500' : ''}"
						>
							<div class="min-w-0">
								<div class="sm:flex items-start gap-x-5">
									<p class=" font-semibold leading-6 text-gray-900 shrink-0 pb-2 sm:pb-0">
										{Name}
									</p>
									<div class=" flex max-w-min gap-x-2">
										<p
											class="mt-0.5 text-xs font-medium ring-1 ring-inset px-1.5 py-0.5 rounded-md text-slate-700 bg-slate-50 ring-slate-600/20"
										>
											{year}
										</p>
										{#each Types as type}
											<p
												class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset {type ===
												'Appareil'
													? 'text-green-700 bg-green-50 ring-green-600/20'
													: ''}
														{type === 'Cuisine' ? 'text-purple-700 bg-purple-50 ring-purple-600/20' : ''}
														{type === 'Lingerie' ? 'text-blue-700 bg-blue-50 ring-blue-600/20' : ''}
														"
											>
												{type}
											</p>
										{/each}
									</div>
								</div>
								<div class="mt-1 items-center gap-x-2 text-xs leading-5 text-gray-500">
									<p class="whitespace-nowrap">
										Mise à jour le <time datetime="2023-03-17T00:00Z" class="font-semibold"
											>{created_at}</time
										>
									</p>

									<p class="break-words hyphens-auto">{doc_name}</p>
								</div>
							</div>
							<div class="flex flex-none items-center gap-x-4">
								<div class="relative flex-none">
									<div
										class="-m-2.5 block p-2.5 text-gray-900 hover:text-gray-700"
										id="options-menu-0-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<a
											href={doc_url}
											class=" bg-white shadow border border-gray-300 hover:bg-gray-50 rounded px-2 sm:px-5 py-2 text-xs font-bold"
											>Télécharger
											<span class="sr-only">, GraphQL API</span>
										</a>
									</div>
								</div>
							</div>
						</li>{/each}
				</ul>
			{/if}
		</div>
		<div class="sm:mt-5">
			<button
				on:click={() => showCuisine()}
				class="relative w-full py-4 border-b-2 border-gray-200/75 group hover:bg-gray-200/75 hover:rounded-xl px-5"
			>
				<div class="relative flex justify-between">
					<span class="pr-3 font-semibold leading-6 text-gray-900">Documents Cuisine</span>
					<span class="pr-3 text-3xl font-semibold leading-6 text-gray-900"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</span>
				</div>
			</button>
			{#if cuisineOn}
				<ul class="grid grid-cols-1 gap-y-2 mt-5">
					{#each arrCuisine as { Name, created_at, doc_name, doc_url, Types, year, Importance }}
						<li
							class="flex items-center justify-between px-5 py-5 bg-white shadow rounded {Importance ===
							'Indispensable'
								? 'border-l-4 border-red-500'
								: ''} {Importance === 'Mode' ? 'border-l-4 border-green-500' : ''}"
						>
							<div class="min-w-0">
								<div class="sm:flex items-start gap-x-5">
									<p class=" font-semibold leading-6 text-gray-900 shrink-0 pb-2 sm:pb-0">
										{Name}
									</p>
									<div class="flex gap-x-2">
										<p
											class="mt-0.5 text-xs font-medium ring-1 ring-inset px-1.5 py-0.5 rounded-md text-slate-700 bg-slate-50 ring-slate-600/20"
										>
											{year}
										</p>
										{#each Types as type}
											<p
												class="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset {type ===
												'Appareil'
													? 'text-green-700 bg-green-50 ring-green-600/20'
													: ''}
														{type === 'Cuisine' ? 'text-purple-700 bg-purple-50 ring-purple-600/20' : ''}
														{type === 'Lingerie' ? 'text-blue-700 bg-blue-50 ring-blue-600/20' : ''}
														"
											>
												{type}
											</p>
										{/each}
									</div>
								</div>
								<div class="mt-1 items-center gap-x-2 text-xs leading-5 text-gray-500">
									<p class="whitespace-nowrap">
										Mise à jour le <time datetime="2023-03-17T00:00Z" class="font-semibold"
											>{created_at}</time
										>
									</p>

									<p class="break-words hyphens-auto">{doc_name}</p>
								</div>
							</div>
							<div class="flex flex-none items-center gap-x-4">
								<div class="relative flex-none">
									<div
										class="-m-2.5 block p-2.5 text-gray-900 hover:text-gray-700"
										id="options-menu-0-button"
										aria-expanded="false"
										aria-haspopup="true"
									>
										<a
											href={doc_url}
											class=" bg-white shadow border border-gray-300 hover:bg-gray-50 rounded px-2 sm:px-5 py-2 text-xs font-bold"
											>Télécharger
											<span class="sr-only">, GraphQL API</span>
										</a>
									</div>
								</div>
							</div>
						</li>{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>
