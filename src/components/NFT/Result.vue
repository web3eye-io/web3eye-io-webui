<template>
<div>
    <q-splitter
      v-model='splitterModel'
    >

      <template v-slot:before>
        <!-- left -->
        <div class='q-pa-md'>
          <div class='q-col-gutter-md row items-start'>
            <div class='col-12'>
              <q-img src='https://cdn.quasar.dev/img/parallax2.jpg'>
                <div class='absolute-bottom text-subtitle1 text-center'>
                  Distance: 0
                </div>
              </q-img>
            </div>
          </div>
          <div class='content-container column'>
            <h5>目标标题</h5>
            <div>
              <span class='label'>首发时间:</span>
              <span class='value'> XXXX-XX-XX</span>
            </div>
            <div>
              <span class='label'>公链信息:</span>
              <span class='value'> 由XX发布于XXXX公链</span>
            </div>
            <div>
              <span class='label'>网站信息:</span>
              <span class='value'> 由XX上传于XXXX网站</span>
            </div>
            <div>
              <span class='label'>作者:</span>
              <span class='value'> XXX</span>
            </div>
            <div>
              <span class='label'>描述:</span>
              <span class='value'> XXX</span>
            </div>
            <div>
              <span class='label'>版权声明:</span>
              <span class='value'> XXX</span>
            </div>
            <div>
              <span class='label'>稀缺度:</span>
              <span class='value'> 1%</span>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:after>
        <div class='q-pa-md'>
          <q-timeline color='secondary'>
            <q-timeline-entry subtitle='February 22, 1986'>
            </q-timeline-entry>

            <q-timeline-entry
              title='Event Title'
              subtitle='February 21, 1986'
              icon='delete'
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </q-timeline-entry>
            <q-timeline-entry
              title='Event Title'
              subtitle='February 22, 1986'
              avatar='https://cdn.quasar.dev/img/avatar2.jpg'
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title='Event Title'
              subtitle='February 22, 1986'
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title='Event Title'
              subtitle='February 22, 1986'
              color='orange'
              icon='done_all'
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </q-timeline-entry>
          </q-timeline>
      </div>
    </template>
    </q-splitter>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';

const splitterModel = ref(35)
</script>