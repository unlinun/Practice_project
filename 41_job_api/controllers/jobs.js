const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");

// 獲得 JObS => 與當前使用者有關係的
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort({
    // 使用 -1 改為倒序排列
    createdAt: -1,
  });
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
// 創建 JOB
const createJob = async (req, res) => {
  /* 如果 verify => 在 auth 的 middleware 裏面，會將 payload 中的 user 加入到 req.user當中，以取得當前的使用者資訊
    ===== 這是在 auth 的  middleware 中的程式碼 =====
     const payload = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, name: payload.name };
  */
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getSingleJob = async (req, res) => {
  // 1. 找到使用者 id 以及 :id (從 req.params 中取得)
  const { userId } = req.user;
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId, createdBy: userId });
  if (!job) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "No job found" });
  }
  res.status(StatusCodes.OK).json({ job });
};

// 更新 JOB
const updateJob = async (req, res) => {
  const { company, position } = req.body;
  const { userId } = req.user;
  const { id: jobId } = req.params;
  // check company or position 是否不為空值
  if (company === "" || position === "") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Company and position cannot be empty" });
  }
  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!job) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "No job found" });
  }
  res.status(StatusCodes.OK).json({ job });
};

// 刪除 JOB
const deleteJob = async (req, res) => {
  const { userId } = req.user;
  const { id: jobId } = req.params;
  const job = await Job.findOneAndRemove({ _id: jobId, createdBy: userId });
  if (!job) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "No job found" });
  }
  res.status(StatusCodes.OK).json({ job });
};

module.exports = { getAllJobs, getSingleJob, createJob, updateJob, deleteJob };
