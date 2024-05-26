<script setup lang='ts'>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
    labelText: string
    type: string
    nameAndId: string
    modelValue?: string
    optional?: boolean
}>();

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
    <label class="block" :for="props.nameAndId">{{ props.labelText }}</label>
    <input
        :type="props.type"
        class="bg-background border-white focus:outline-gray-200 w-full rounded-sm mt-3 mb-4 lg:py-2 py-1 px-4"
        :name="props.nameAndId"
        :id="props.nameAndId"
        :v-model="props.modelValue"
        @input="updateValue"
        :required="props.optional"
    />
</template>