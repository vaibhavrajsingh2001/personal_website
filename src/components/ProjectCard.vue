<template>
	<li class="col-span-1 bg-background-secondary rounded-lg shadow">
		<div class="w-full flex items-center justify-between p-6 space-x-6">
			<div class="flex-1 truncate">
				<div class="flex items-center space-x-3">
					<h3 class="text-xl leading-5 font-medium truncate" :title="projectName">
						{{projectName}}
					</h3>
				</div>
			</div>
			<g-image
				:src="imgUrl"
				alt="tech stack icon"
				class="flex-shrink-0 sm:mx-0"
			/>
		</div>
		<div class="border-t border-gray-200">
			<div class="-mt-px flex">
				<div class="w-0 flex-1 flex border-r border-gray-200">
					<a
						:href="liveLink"
						class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-lg leading-5 font-medium border border-transparent rounded-bl-lg text-indigo-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
						<span class="ml-3">Visit live</span>
					</a>
				</div>
				<div class="-ml-px w-0 flex-1 flex">
					<a
						:href="codeLink"
						class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-lg leading-5 font-medium border border-transparent rounded-br-lg text-indigo-300 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							></path>
						</svg>
						<span class="ml-3">See code</span>
					</a>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: {
		projectName: {
			type: String,
			required: true,
        },
        imgUrl: {
			type: String,
			required: true,
        },
        liveLink: {
			type: String,
			required: true,
        },
        codeLink: {
			type: String,
			required: true,
		},
	},
};
</script>
