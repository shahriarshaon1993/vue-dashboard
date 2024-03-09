<script setup>
import OrangeButton from "@/components/Buttons/OrangeButton.vue";
import IconsXmark from "@/components/icons/Xmark.vue";
import Modal from "@/components/Modal.vue";
import Card from "@/components/Card.vue";

import {ref} from "vue";
import LightButton from "@/components/Buttons/LightButton.vue";

const confirmingOpenSmallModal = ref(false);
const confirmingOpenDefaultModal = ref(false);
const confirmingOpenLargeModal = ref(false);
const confirmingOpenExtraLargeModal = ref(false);

const confirmOpenSmallModal = () => {
  confirmingOpenSmallModal.value = true;
};

const confirmOpenDefaultModal = () => {
  confirmingOpenDefaultModal.value = true;
};

const confirmOpenLargeModal = () => {
  confirmingOpenLargeModal.value = true;
};

const confirmOpenExtraLargeModal = () => {
  confirmingOpenExtraLargeModal.value = true;
};

const closeModal = () => {
  confirmingOpenSmallModal.value = false;
  confirmingOpenDefaultModal.value = false;
  confirmingOpenLargeModal.value = false;
  confirmingOpenExtraLargeModal.value = false;
};
</script>

<template>
  <Card title="Modals">
    <div class="flex justify-center items-center">
      <div>
        <OrangeButton @click="confirmOpenSmallModal">Small modal</OrangeButton>
        <OrangeButton @click="confirmOpenDefaultModal">Default modal</OrangeButton>
        <OrangeButton @click="confirmOpenLargeModal">Large modal</OrangeButton>
        <OrangeButton @click="confirmOpenExtraLargeModal">Extra large modal</OrangeButton>
      </div>
    </div>
  </Card>

  <Modal :show="confirmingOpenSmallModal" @close="closeModal" maxWidth="md">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Small modal
        </h3>
        <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-orange-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-orange-300 dark:hover:text-dark-900">
          <IconsXmark class="w-3 h-3" />
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4 md:p-5 space-y-4">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
      <!-- Modal footer -->
      <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <OrangeButton type="button">I accept</OrangeButton>
        <LightButton type="button" @click="closeModal">Cancel</LightButton>
      </div>
    </div>
  </Modal>

  <Modal :show="confirmingOpenDefaultModal" @close="closeModal">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Default Modal
        </h3>
        <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-orange-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-orange-300 dark:hover:text-dark-900">
          <IconsXmark class="w-3 h-3" />
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4 md:p-5 space-y-4">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
      <!-- Modal footer -->
      <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <OrangeButton type="button">I accept</OrangeButton>
        <LightButton type="button" @click="closeModal">Cancel</LightButton>
      </div>
    </div>
  </Modal>

  <Modal :show="confirmingOpenLargeModal" @close="closeModal" maxWidth="4xl">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Large modal
        </h3>
        <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-orange-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-orange-300 dark:hover:text-dark-900">
          <IconsXmark class="w-3 h-3" />
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4 md:p-5 space-y-4">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
      <!-- Modal footer -->
      <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <OrangeButton type="button">I accept</OrangeButton>
        <LightButton type="button" @click="closeModal">Cancel</LightButton>
      </div>
    </div>
  </Modal>

  <Modal :show="confirmingOpenExtraLargeModal" @close="closeModal" maxWidth="7xl">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <!-- Modal header -->
      <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          Extra Modal
        </h3>
        <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-orange-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-orange-300 dark:hover:text-dark-900">
          <IconsXmark class="w-3 h-3" />
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4 md:p-5 space-y-4">
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p>
      </div>
      <!-- Modal footer -->
      <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <OrangeButton type="button">I accept</OrangeButton>
        <LightButton type="button" @click="closeModal">Cancel</LightButton>
      </div>
    </div>
  </Modal>
</template>