<script lang="ts">
	import type { AppendTarget } from 'svelte/types/compiler/interfaces';
	import type { PageData } from './$types';

	export let data: PageData;
	let typesActive = ['Cuisine', 'Lingerie', 'Appareil'];
	let myArray = data.cdlf as Array<any>;
	console.log(myArray);
	let filterTypes = (e: Event, item: string) => {
		let button = e.target as HTMLButtonElement;
		button.classList.toggle('opacity-20');
		button.classList.toggle('hover:opacity-40');

		if (typesActive.includes(item)) {
			typesActive = typesActive.filter((type) => type !== item);
		} else {
			typesActive.push(item);
		}

		myArray = data.cdlf.filter((item) =>
			item.Types.some((type: string) => typesActive.includes(type))
		);
	};
</script>

<div class=" min-h-screen bg-gray-100 pt-5 pb-12 px-2 sm:px-8">
	<div class="max-w-3xl m-auto">
		<h1 class="text-2xl pt-10 uppercase font-bold">CDLF_docs</h1>
		<p class="text-xs">Documentation Colonie de la Fouly</p>
		<div class="flex flex-wrap text-sm m-auto w-full justify-start gap-3 pt-12 pb-3">
			<button
				on:click={(e) => filterTypes(e, 'Cuisine')}
				class=" py-1 px-3 rounded ring-1 ring-inset bg-indigo-50 ring-indigo-600/20 text-indigo-700 hover:bg-indigo-100
					 ">Cuisine</button
			>
			<button
				on:click={(e) => filterTypes(e, 'Lingerie')}
				class=" py-1 px-3 rounded ring-1 ring-inset bg-blue-50 ring-blue-600/20 text-blue-700 hover:bg-blue-100"
				>Lingerie</button
			>

			<button
				on:click={(e) => filterTypes(e, 'Appareil')}
				class=" py-1 px-3 rounded ring-1 ring-inset bg-green-50 ring-green-600/20 text-green-700 hover:bg-green-100"
				>Appareil</button
			>
			<div class=" py-1 px-3 rounded ring-1 ring-inset bg-gray-50 ring-gray-600/20">2023</div>
		</div>
		<ul class="grid grid-cols-1 gap-2">
			{#each myArray as { Name, created_at, doc_name, doc_url, Types, year }}
				<li
					class="flex items-center justify-between gap-x-6 py-4 sm:pt-7 sm:pb-5 px-5 bg-white shadow rounded"
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
											{type === 'Cuisine' ? 'text-indigo-700 bg-indigo-50 ring-indigo-600/20' : ''}
											{type === 'Lingerie' ? 'text-blue-700 bg-blue-50 ring-blue-600/20' : ''}
											"
									>
										{type}
									</p>
								{/each}
							</div>
						</div>
						<div class="mt-1 sm:flex items-center gap-x-2 text-xs leading-5 text-gray-500">
							<p class="whitespace-nowrap">
								Mise à jour le <time datetime="2023-03-17T00:00Z">{created_at}</time>
							</p>
							<svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current hidden sm:block">
								<circle cx="1" cy="1" r="1" />
							</svg>
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
	</div>
</div>
