import { create } from 'zustand';
import { Borrowing } from '@models/borrowing';
import { devtools } from 'zustand/middleware';
import { Dayjs } from 'dayjs';

export type BorrowingFormState = {
  currentStep: number;

  // Step 1: Book selection
  selectedBookId: string | null;
  bookFilters: {
    title: string;
    author: string;
    genre: string;
    publicationYear: string;
  };

  // Step 2: Borrowing details
  memberId: string | null;
  borrowDate: Dayjs | null;
  returnDate: Dayjs | null;
  notes: string;

  // Form validation states
  errors: {
    bookSelection: boolean;
    memberSelection: boolean;
    borrowDate: boolean;
  };

  // Actions
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Book selection actions
  setSelectedBookId: (bookId: string | null) => void;
  setBookFilters: (filters: Partial<BorrowingFormState['bookFilters']>) => void;
  resetBookFilters: () => void;

  // Borrowing details actions
  setMemberId: (memberId: string | null) => void;
  setBorrowDate: (date: Dayjs | null) => void;
  setReturnDate: (date: Dayjs | null) => void;
  setNotes: (notes: string) => void;

  // Validation actions
  validateCurrentStep: () => boolean;
  resetErrors: () => void;

  // Form reset
  resetForm: () => void;

  // Get form data
  getFormData: () => Partial<Borrowing>;
};

// Define initial state
const initialState = {
  currentStep: 0,

  // Step 1: Book selection
  selectedBookId: null,
  bookFilters: {
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
  },

  // Step 2: Borrowing details
  memberId: null,
  borrowDate: null,
  returnDate: null,
  notes: '',

  // Form validation states
  errors: {
    bookSelection: false,
    memberSelection: false,
    borrowDate: false,
  },
};

// Create the store
export const useBorrowingFormStore = create<BorrowingFormState>()(
  devtools(
    (set, get) => ({
      ...initialState,

      // Step navigation
      setCurrentStep: (step) => set({ currentStep: step }),
      nextStep: () => {
        const { currentStep, validateCurrentStep } = get();
        const isValid = validateCurrentStep();

        if (isValid) {
          set({ currentStep: currentStep + 1 });
        }
      },
      prevStep: () => {
        const { currentStep } = get();
        if (currentStep > 0) {
          set({ currentStep: currentStep - 1 });
        }
      },

      // Book selection actions
      setSelectedBookId: (bookId) => set({ selectedBookId: bookId }),
      setBookFilters: (filters) =>
        set((state) => ({
          bookFilters: { ...state.bookFilters, ...filters },
        })),
      resetBookFilters: () => set({ bookFilters: initialState.bookFilters }),

      // Borrowing details actions
      setMemberId: (memberId) => set({ memberId }),
      setBorrowDate: (date) => set({ borrowDate: date }),
      setReturnDate: (date) => set({ returnDate: date }),
      setNotes: (notes) => set({ notes }),

      // Validation actions
      validateCurrentStep: () => {
        const { currentStep, selectedBookId, memberId, borrowDate } = get();
        let isValid = true;

        if (currentStep === 0) {
          // Validate book selection
          if (!selectedBookId) {
            set((state) => ({
              errors: { ...state.errors, bookSelection: true },
            }));
            isValid = false;
          } else {
            set((state) => ({
              errors: { ...state.errors, bookSelection: false },
            }));
          }
        } else if (currentStep === 1) {
          // Validate borrowing details
          const errors = { ...get().errors };

          if (!memberId) {
            errors.memberSelection = true;
            isValid = false;
          } else {
            errors.memberSelection = false;
          }

          if (!borrowDate) {
            errors.borrowDate = true;
            isValid = false;
          } else {
            errors.borrowDate = false;
          }

          set({ errors });
        }

        return isValid;
      },
      resetErrors: () => set({ errors: initialState.errors }),

      // Form reset
      resetForm: () => set({ ...initialState }),

      // Get form data
      getFormData: () => {
        const { selectedBookId, memberId, borrowDate, returnDate, notes } = get();
        return {
          book_id: selectedBookId || undefined,
          member_id: memberId || undefined,
          borrow_date: borrowDate,
          return_date: returnDate,
          notes,
          status: 'borrowed', // Default status for new borrowings
        };
      },
    }),
    { name: 'borrowing-form-store' },
  ),
);
