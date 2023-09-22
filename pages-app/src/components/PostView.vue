<template>
  <b-container>
      <!-- 投稿日時の表示 -->
      <b-row>
          <b-col sm="1"><b-icon-watch></b-icon-watch></b-col>
          <b-col>{{unixtodate(post.datetime)}}</b-col>
      </b-row>
      <!-- 投稿者の表示 -->
      <!--  改行コード描画のためにCSSのwhite-space: pre-wrapを適用 -->
      <b-row>
          <b-col sm="1"><b-icon-file-text></b-icon-file-text></b-col>
          <b-col style="white-space: pre-wrap;">{{post.text}}</b-col>""
      </b-row>
      <!-- 位置情報の表示 -->
      <b-row v-if="post.lat && post.lon">
          <b-col sm="1"><b-icon-map></b-icon-map></b-col>
          <b-col>Lat: {{post.lat}} Lon: {{post.lon}}</b-col>
          <b-col>{{post.location}}</b-col>
      </b-row>
      <!-- Google Mapsの埋め込み -->
      <b-row v-if="post.lat && post.lon">
          <b-col sm="1"></b-col>
          <b-col>
              <!-- TDOO debug -->
              Lat: {{post.lat}} Lon: {{post.lon}}
              <iframe
                height="200px"
                width="100%"
                frameborder="0" style="border:0"
                :src="`https://www.google.com/maps/embed/v1/place?key=${maps_key}&zoom=15&q=${post.lat},${post.lon}`">
              </iframe>
          </b-col>
      </b-row>
      <!-- 画像の表示 -->
      <b-row>
          <b-col sm="1"><b-icon-image></b-icon-image></b-col>
          <b-col v-for="(image, index) in post.images" :key="index">
              <div>
                  <img :src="addEndpoint(image)" style="max-width: 200px; object-fit: cover;"/>
              </div>
          </b-col>
      </b-row>
      <hr />
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import { DateTime } from 'luxon';
import { Post, Post as PostType} from '../types/Post'

export default defineComponent({
    name: 'PostView',
    props: {
        id: String
    },
    data: () => {
        return {
            post: {} as PostType,
            maps_key: process.env.VUE_APP_MAPS_API_KEY
        }
    },
    mounted: async function () {
        try{
            const response = await axios.get(process.env.VUE_APP_ARTICLE_API + '/post/' + this.id);
            this.post = response.data.data as PostType;
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    },
    methods: {
        unixtodate: function (date: number): string {
            if (typeof date == 'undefined') return '';
            return DateTime.fromSeconds(date).toFormat('yyyy/MM/dd HH:mm:ss')
        },
        addEndpoint: function(key: string): string {
            return process.env.VUE_APP_UPLOAD_API + '/' + key
        },
    }
});
</script>

<!--<style scoped></style>-->