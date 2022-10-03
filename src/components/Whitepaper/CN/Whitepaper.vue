<template>
  <div class='row'>
    <div class='table1'>
      <ContentTable :content-table='contentTable' />
    </div>
    <div class='article'>
      <h2>1  内容提要</h2>
      <p>
        当我们说 Web3.0，我们通常倾向于将其视为互联网发展过程中的特定阶段，特定关联于去 中心化、区块链、抗审查、数据确权、身份验证、元宇宙等，但也仅此而已。时至今日，
        所 有关于 Web3.0 的应用，依然仅限于在 OpenSea 上发布 NFT 出售，无论该 NFT 是一张图片， 还是某虚拟世界的一个地块，其本质未变。马斯克抨击 Web3.0 到目前为止只是骗局，
        在当 前场景下适用于大多数人。但科技的发展总是从今天我们不能理解的地方开始，而这样的发 展通常在明天会变成我们生活的日常，于 Web3.0 而言，其依然处于初生阶段，
        理性上我们 不能预测 Web3.0 为社会带来的实际价值与变革，在主权社会中甚至可能遭遇极大的困难与 障碍，然而 Web3.0 中带来的对于社会个体的价值提升，
        是无论去中心化还是中心化的社会体制下向更高层次的文明演进。 本文档用于描述 Web3.0 Eye 的起因，以及 Web3.0 Eye 试图在 Web3.0 场景下解决的问题。
      </p>
      <p>
        本文档将致力于将特定于 Web3.0 某场景下的细微问题阐述清楚，并尝试构建该问题的解决 方案。我们承认，Web3.0 Eye 无论对于传统的互联网体系，还是新的 Web3.0 场景，
        都不能 称之为一个性感的故事；但我们亦相信，划时代的概念从提出到渗透主流社会的方方面面， 需要经历漫长时间，那些最终能够对社会产生巨大影响的概念，
        在发展过程中亦需先踏实基 础设施，而后经历漫长的场景迭代，而后规模应用。本文档的阅读对象主要包含参与构建 Web3.0 Eye 体系的工程师、架构师、产品经理、项目经理，
        以及 Web3.0 Eye 之外致力于构 建 Web3.0 基础设施的人。
      </p>
      <h2>2 Web3.0 Eye 是什么</h2>
    </div>
    <div class='table2'>
      <ContentTable :content-table='contentTable' />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'

const ContentTable = defineAsyncComponent(() => import('../../BlogPage/ContentTable.vue'))

const contentTable = [
  {
    label: 'Web3Eye白皮书',
    header: 'root',
    children: [
      {
        label: '1  内容提要',
        header: 'generic'
      }, {
        label: '2 Web3.0 Eye 是什么',
        header: 'generic'
      }
    ]
  }
]

</script>

<style scoped lang='sass'>
p
  font-size: 20px
  color: $grey-10

.article
  width: 65%
  margin-right: 5%
  @media (max-width: $breakpoint-sm-min)
    width: 100%
    margin-right: 0

.table1
  display: none
  @media (max-width: $breakpoint-sm-min)
    width: 100%
    display: inline

.table2
  width: 30%
  @media (max-width: $breakpoint-sm-min)
    display: inline

h2
  color: $blue-14
</style>
