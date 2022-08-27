import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const JobSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, '회사 칸을 입력해주세요!'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, '포지션을 입력해주세요!'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['면접중', '구직중', '구직완료'],
      default: '구직완료',
    },
    jobType: {
      type: String,
      enum: ['풀타임', '파트타임', '재택근무', '인턴'],
      default: '풀타임',
    },
    jobLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    createBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, '유저사용자를 꼭 입력해주세요!'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
