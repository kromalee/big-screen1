 <template>
  <div class="text">{{ text }}</div>
</template>
 
 <script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
 
 <style>
.text {
  position: absolute;
  left: 48px;
  top: 48px;
  /* width: 288px; */
  height: 52px;
  font-size: 48px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #000000;
  line-height: 44px;
  background: linear-gradient(180deg, #24f3ff 0%, #018ef8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>