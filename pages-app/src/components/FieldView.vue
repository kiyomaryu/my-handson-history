<!-- テンプレート部分：ブラウザに表示されるとこ -->
<template>
	<b-container>
		<b-row>
			<b-col sm="1"><b-icon-file-text></b-icon-file-text></b-col>
			<b-col><b-form-textarea rows="2" v-model="text"></b-form-textarea></b-col>
		</b-row>
		<b-row v-if="lat && lon">
			<b-col sm="1"><b-icon-map></b-icon-map></b-col>
			<b-col>Lat: {{lat}}} Lon:{{lon}}</b-col>
			<b-col>
				<b-form-select v-model="location" :options="locations"></b-form-select>
			</b-col>
		</b-row>
		<b-row>
			<b-col sm="1"><b-icon-image></b-icon-image></b-col>
			<b-col><b-form-file @change="onFileChange" accept="image/*" ref="fileInput" multiple placeholder="Selected files show in below"></b-form-file></b-col>
		</b-row>
		<b-row v-for="image in images" :key="image.idx">
			<b-col sm="1"></b-col>
			<b-col sm="3"><img :src="image.url" stype="max-width: 200px; max-height: 200px; object-fit: cover;"></b-col>
			<b-col><b-button @click="removeImage(image.idx)"><b-icon-trash></b-icon-trash></b-button></b-col>
		</b-row>
		<b-row>
			<b-col sm="1"><b-button @click="upload" :disabled="uploadState.disabled"><b-icon-pencil-square :animation="uploadState.animate"></b-icon-pencil-square></b-button></b-col>
			<b-col sm="1"><b-button @click="fetch" :disabled="fetchState.disabled"><b-icon-pencil-square :animation="fetchState.animate"></b-icon-pencil-square></b-button></b-col>
			<b-col sm="1">
				<b-button @click="chageLocState" :disabled="locationState.disabled">
					<b-icon-geo v-if="allowState.loc" :animation="locationState.animate"></b-icon-geo>
					<b-iconstack v-else>
						<b-icon-geo stacked></b-icon-geo><b-icon-stash-circle stacked scale="1.5"></b-icon-stash-circle>
					</b-iconstack>
				</b-button>
			</b-col>
		</b-row>
		<hr/>
		</b-container>
</template>

<!-- ロジック部分：script書くところ -->
<script lang="ts">
</script>

<!-- スタイル部分：css書くところ -->
<!-- 今回は使わない -->
<!-- <style scoped></style> -->



