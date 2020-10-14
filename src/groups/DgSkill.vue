<template>
	<div
		class="bg-white md:w-1/3 py-5 my-4 md:mx-3 border border-blue-300 rounded-lg shadow-md cursor-pointer"
		id="divinfo"
	>
		<h1 class="text-lg mb-5 text-blue-600">{{skill.title}}</h1>
		<p class="mx-3 justify-center">
			{{skill.description}}
		</p>
		<div class="flex justify-center mt-3 md:p-5">
			<img
				class="w-24 h-24 hover:scale-125"
				:src="skill.src"
				alt=""
			/>
		</div>
	</div>
</template>
<script>
export default {
	name: "DgSkill",
	props: {
		skill:{
			
			required: true,
		}
	},
};
</script>

<style scoped>
</style>

