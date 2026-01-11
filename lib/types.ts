export interface EnquiryFormData {
  fullName: string
  email: string
  phone: string
  travelDate: string
  message: string
  packageId: string
  packageTitle: string
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
}
