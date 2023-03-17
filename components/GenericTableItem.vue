<template>
 <tr>
    <td class="px-4 mx-4 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
      <div class="flex items-center">
        <label class="inline-flex">
          <span class="sr-only">Select</span>
          <input :id="customer.id" class="form-checkbox" type="checkbox" :value="value" @change="check" :checked="checked" />
        </label>
      </div>
    </td>
    <td class="px-4 mx-4 py-3 whitespace-nowrap w-px" v-for="(key,index) of keysToShow" :key="`${key}-${index}`">
      <div class="text-left">{{customer[key]}}</div>
    </td>

    <!-- Actions -->
    <td class="px-4 mx-4 py-3 ">
      <span class="inline-flex w-full justify-end gap-4">
        <button class="text-secondaryText hover:text-primary active:text-primaryText">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M15 12.5C15 13.2956 14.6839 14.0587 14.1213 14.6213C13.5587 15.1839 12.7956 15.5 12 15.5C11.2044 15.5 10.4413 15.1839 9.87868 14.6213C9.31607 14.0587 9 13.2956 9 12.5C9 11.7044 9.31607 10.9413 9.87868 10.3787C10.4413 9.81607 11.2044 9.5 12 9.5C12.7956 9.5 13.5587 9.81607 14.1213 10.3787C14.6839 10.9413 15 11.7044 15 12.5V12.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.45801 12.5C3.73201 8.443 7.52301 5.5 12 5.5C16.478 5.5 20.268 8.443 21.542 12.5C20.268 16.557 16.478 19.5 12 19.5C7.52301 19.5 3.73201 16.557 2.45801 12.5V12.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>
       
        <button class="text-secondaryText hover:text-primary active:text-primaryText">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M11 5.49992H6C5.46957 5.49992 4.96086 5.71063 4.58579 6.0857C4.21071 6.46078 4 6.96948 4 7.49992V18.4999C4 19.0304 4.21071 19.5391 4.58579 19.9141C4.96086 20.2892 5.46957 20.4999 6 20.4999H17C17.5304 20.4999 18.0391 20.2892 18.4142 19.9141C18.7893 19.5391 19 19.0304 19 18.4999V13.4999M17.586 4.08592C17.7705 3.8949 17.9912 3.74253 18.2352 3.63772C18.4792 3.5329 18.7416 3.47772 19.0072 3.47542C19.2728 3.47311 19.5361 3.52371 19.7819 3.62427C20.0277 3.72484 20.251 3.87334 20.4388 4.06113C20.6266 4.24891 20.7751 4.47222 20.8756 4.71801C20.9762 4.9638 21.0268 5.22716 21.0245 5.49272C21.0222 5.75828 20.967 6.02072 20.8622 6.26473C20.7574 6.50874 20.605 6.72942 20.414 6.91392L11.828 15.4999H9V12.6719L17.586 4.08592Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>
       
        <button class="text-secondaryText hover:text-primary active:text-primaryText">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M19 7.5L18.133 19.642C18.0971 20.1466 17.8713 20.6188 17.5011 20.9636C17.1309 21.3083 16.6439 21.5 16.138 21.5H7.862C7.35614 21.5 6.86907 21.3083 6.49889 20.9636C6.1287 20.6188 5.90292 20.1466 5.867 19.642L5 7.5M10 11.5V17.5M14 11.5V17.5M15 7.5V4.5C15 4.23478 14.8946 3.98043 14.7071 3.79289C14.5196 3.60536 14.2652 3.5 14 3.5H10C9.73478 3.5 9.48043 3.60536 9.29289 3.79289C9.10536 3.98043 9 4.23478 9 4.5V7.5M4 7.5H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>
        
    
      </span>
    </td>
    <!-- <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{customer.username}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{customer.email}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left">{{customer.role}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-center">{{customer.role}}</div>
    </td>
    <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
      <div class="text-left font-medium text-sky-500">{{customer.lastOrder}}</div>
    </td> -->
  </tr>    
</template>

<script setup>
const props = defineProps(['customer', 'value', 'selected','keysToShow'])
const checked = computed(() => props.selected.includes(props.value))

function check() {
  let updatedSelected = [...props.selected]
  if (this.checked) {
    updatedSelected.splice(updatedSelected.indexOf(props.value), 1)
  } else {
    updatedSelected.push(props.value)
  }
  context.emit('update:selected', updatedSelected)
}

</script>