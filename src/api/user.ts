import service from "@/utils/request";

export const useAddApi = (data: any) => {
    return service.post('/generatorDatabase/add', data)
}

export const useDeleteApi = (data: any) => {
    return service.post('/generatorDatabase/delete', data)
}

export const useDeletesApi = (data: any) => {
    return service.post('/generatorDatabase/deleteByIds', data)
}

export const useUpdateApi = (data: any) => {
    return service.post('/generatorDatabase/update', data)
}

export const useGetByIdApi = (data: any) => {
    return service.post('/generatorDatabase/getById', data)
}

export const useGetListApi = (data: any) => {
    return service.post('/generatorDatabase/getList', data)
}
